import { connect } from 'react-redux';
import Profile from '../components/Profile/Profile';
import profilepic from '../images/potatoe.jpg';

const mapReduxStateToProps = reduxState => ({
  username: 'It is ME, the user!',
  cohort: '#2',
  lastLogin: '01-01-2010 12:30',
  profilepic: profilepic,
  profileDesciption: '**Markdown is awesome!**'
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Profile);
