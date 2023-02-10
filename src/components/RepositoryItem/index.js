import './index.css'

const RepositoryItem = props => {
  const {repoItemDetails} = props
  const {starsCount, avatarUrl, forksCount, issuesCount, name} = repoItemDetails
  return (
    <li className="repo-item-container">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h1 className="name">{name}</h1>
      <div className="star-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="star-img"
        />
        <p className="star">
          {forksCount}
          <span>stars</span>
        </p>
      </div>
      <div className="star-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="star-img"
        />
        <p className="star">
          {starsCount}
          <span>forks</span>
        </p>
      </div>
      <div className="star-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="star-img"
        />
        <p className="star">
          {issuesCount}
          <span>open issues</span>
        </p>
      </div>
    </li>
  )
}

export default RepositoryItem
