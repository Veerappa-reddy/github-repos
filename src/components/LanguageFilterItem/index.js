import './index.css'

const LanguageFilterItem = props => {
  const {langItemDetails, onClickTab, isSelectTab} = props
  const {id, language} = langItemDetails

  const onChangeLang = () => {
    onClickTab(id)
  }

  const selectLang = isSelectTab ? 'select-lang-css' : null

  return (
    <li className="li-item">
      <button
        onClick={onChangeLang}
        type="button"
        className={`lang-btn ${selectLang}`}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
