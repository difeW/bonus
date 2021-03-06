import React, { Component } from 'react'
import shopbtn from 'contents/images/buttons/shopbtn.png';
import sharebtn from 'contents/images/buttons/sharebtn.png';
import replaybtn from 'contents/images/buttons/replaybtn.png';
import LoadingScreen from 'components/AppScreens/LoadingScreen';
import { Context } from 'Context/Context';

// const { list } = useContext(Context)
export default class ScoreScreen extends Component {
  static contextType = Context
  constructor(props) {
    super(props);
    this.state = { items: [], loading: true };
  }
  async componentDidMount() {

    fetch('https://mobile12346.herokuapp.com/game/score')
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          items: data.map((item, index) => {
            return {
              rank: index + 1,
              name: item.username,
              totalScore: item.score
            }
          })
        })
      });

    // this.setState({
    //   loading: false,
    //   items: this.context.list.map((item, index) => {
    //     return {
    //       rank: index + 1,
    //       name: item.username,
    //       totalScore: item.score
    //     }
    //   })
    // })

  };
  static fetchData(data) {
    return (
      <table className='table table-responsive' aria-labelledby="tabelLabel">
        <tbody>
          {data.map(item =>
            <tr key={item.id}>
              <td>{item.rank}</td>
              <td>{item.name}</td>
              < td > {Number(item.totalScore.toFixed(1))}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  onClickShareBtn = () => {
    this.props.history.push("/game");
  }
  onClickreplayBtn = () => {
    this.props.history.push("/game");
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : ScoreScreen.fetchData(this.state.items);

    return (
      (this.state.loading) ? (
        <LoadingScreen />
      ) : (
        <div className="sas__blankpaper" style={{ height: window.innerHeight }}>
          <div className="sas__score">
            <div className="score__header">
              <div className="score__headermain">top best kings</div>
              <div className="score__headersub">of all times</div>
            </div>
            {contents}
            <div className="score__actionbtngroup">
              <div className="actionbtngroup__item">
                <img src={shopbtn} alt="dsds" />
                <div>shop</div>
              </div>
              <div className="actionbtngroup__item" onClick={() => this.onClickreplayBtn()}>
                <img src={replaybtn} alt="dsds" />
                <div>replay</div>
              </div>
              <div className="actionbtngroup__item"
              //onClick={() => this.onClickShareBtn()}
              >
                <img src={sharebtn} alt="dsds" />
                <div>share </div>
              </div>
            </div>
          </div>
        </div>

      )

    );
  }

  async fetchData() {
    try {
      const response = await fetch('leaderBoard'); // g???i api l??n controller ????? l???y data
      const data = await response.json();
      console.log(data);
      this.setState({ items: data, loading: false });
    }
    catch (e) {
      console.log(e);
    }
  }
}
