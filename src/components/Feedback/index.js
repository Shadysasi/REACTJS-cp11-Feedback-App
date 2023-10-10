// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {changeFeedback: true}

  onClickEmoji = () => {
    this.setState({changeFeedback: false})
  }

  render() {
    const {changeFeedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        {changeFeedback ? (
          <div className="card-container">
            <h1 className="title">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-list-container">
              {emojis.map(eachEmoji => (
                <li className="list-card" key={eachEmoji.id}>
                  <button
                    onClick={this.onClickEmoji}
                    type="button"
                    className="btn-style"
                  >
                    <img
                      src={eachEmoji.imageUrl}
                      alt={eachEmoji.name}
                      className="emoji-img"
                    />
                    <span className="name-card">{eachEmoji.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="card-container">
            <img src={loveEmojiUrl} alt="love emoji" className="emoji-img" />
            <h1 className="title">Thank you!</h1>
            <p className="text-card">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
