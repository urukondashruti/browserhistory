import './App.css'

import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

const Items = props => {
  const {Item, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = Item

  const onAdd = () => {
    onDelete(id)
  }

  return (
    <li className="list2">
      <div className="list1">
        <p>{timeAccessed}</p>
        <img src={logoUrl} className="size4" alt="domain logo" />
        <p>{title}</p>
        <p className="para2">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="but"
        data-testid="delete"
        onClick={onAdd}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="size4"
          alt="delete"
        />
      </button>
    </li>
  )
}

class App extends Component {
  state = {
    searchInput: '',
    detailList: initialHistoryList,
  }

  onClickButt = event => {
    const {searchInput, detailList} = this.state
    this.setState({searchInput: event.target.value})

    const value4 = detailList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    this.setState({detailList: value4})
  }

  onDelete = id => {
    const {detailList} = this.state

    const value4 = detailList.filter(each => each.id !== id)
    this.setState({detailList: value4})
  }

  render() {
    const {searchInput, detailList} = this.state

    return (
      <div className="background">
        <div className="con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="size"
          />
          <div className="backs">
            <div className="con1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="size1"
              />
            </div>
            <input
              type="search"
              className="input1"
              value={searchInput}
              onChange={this.onClickButt}
              placeholder="Search history"
            />
          </div>
        </div>
        <div className="con4">
          {detailList.length > 0 ? (
            <ul className="con3">
              {detailList.map(each => (
                <Items Item={each} onDelete={this.onDelete} key={each.id} />
              ))}
            </ul>
          ) : (
            <p>There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default App
