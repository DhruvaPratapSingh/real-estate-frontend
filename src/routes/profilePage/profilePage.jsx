import "./profilePage.scss"
import List from './../../components/list/List';
import Chat from './../../components/chat/Chat';

const ProfilePage = () => {
    return (
        <div className="profilePage">
          <div className="details">
            <div className="wrapper">
              <div className="title">
                <h1>User Information</h1>
                <button>Update Profile</button>
              </div>
              <div className="info">
                <span>
                  Avatar:
                  <img
                    src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png"
                    alt=""
                  />
                </span>
                <span>
                  Username: <b>rohit</b>
                </span>
                <span>
                  E-mail: <b>rohit@gmail.com</b>
                </span>
              </div>
              <div className="title">
                <h1>My List</h1>
                <button>Create New Post</button>
              </div>
              <List />
              <div className="title">
                <h1>Saved List</h1>
              </div>
              <List />
            </div>
          </div>
          <div className="chatContainer">
            <div className="wrapper">
              <Chat/>
            </div>
          </div>
        </div>
      );
}

export default ProfilePage
