import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
          <h1 className={headerStyles.title}>Zesty.io</h1>
          <p className={headerStyles.description}>Simplify your digital work.</p>
        </div>
    )
}

export default Header