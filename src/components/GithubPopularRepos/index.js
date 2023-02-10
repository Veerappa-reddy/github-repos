import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {isLoader: true, reposList: [], tabId: languageFiltersData[0].id}

  componentDidMount() {
    this.getRepositorysData()
  }

  getRepositorysData = async () => {
    const {tabId} = this.state

    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${tabId}`,
    )
    const data = await response.json()
    const updatedData = data.popular_repos.map(eachData => ({
      avatarUrl: eachData.avatar_url,
      forksCount: eachData.forks_count,
      id: eachData.id,
      issuesCount: eachData.issues_count,
      name: eachData.name,
      starsCount: eachData.stars_count,
    }))
    this.setState({reposList: updatedData, isLoader: false})
  }

  onClickTab = id => {
    this.setState({tabId: id, isLoader: true}, this.getRepositorysData)

    // console.log(id)
  }

  renderReposList = () => {
    const {reposList} = this.state

    return (
      <ul className="un-order-list-1">
        {reposList.map(eachRepoItem => (
          <RepositoryItem
            repoItemDetails={eachRepoItem}
            key={eachRepoItem.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoader, reposList, tabId} = this.state
    console.log(reposList)

    return (
      <div className="app-container">
        <h1 className="heading">Popular</h1>
        <ul className="un-order-list">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              langItemDetails={eachLanguage}
              key={eachLanguage.id}
              onClickTab={this.onClickTab}
              isSelectTab={eachLanguage.id === tabId}
            />
          ))}
        </ul>
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          this.renderReposList()
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
