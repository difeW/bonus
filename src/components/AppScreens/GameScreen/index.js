import React, { Component, Fragment, useContext } from "react";
import TinderCard from "react-tinder-card";
import LoadingScreen from "components/AppScreens/LoadingScreen";
import jokerimg from "contents/images/game/joker.png";
import jokerimgUp from "contents/images/game/joker-up.png";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { Context } from "Context/Context";


const { list, setlist } = useContext(Context)

const DataMain = [
  {
    contentUrl: 'knight.png',
    question: [
      {
        id: '1',
        content: 'Do you want to take vengeance and attack their salt depot?',
        description: 'Your highness, our hinterlands were attacked by the Hightower’s army.',
        info: `Salt has played a prominent role in determining the power and location of the world${"'"}s great cities.Some wars for salt took place in the past`,
        inCorrectPoint: 337,
        point: 663,
        isCorrect: true
      }
      ,
      {
        id: '1',
        content: `Would you like to hire them? `,
        description: 'The Hightower’s King blocks our way to the sea and we’re losing our resource to make salt. For a little payment, a group of mercenaries could help.',
        info: `Via Salaria was an ancient roman road used to transport salt from the sea to Rome and other roman cities.`,
        inCorrectPoint: 225,
        point: 775,
        isCorrect: true
      },
      {
        id: '1',
        content: 'Do you want to pay him the double? ',
        description: `Sir, as much as I like my job, I am not comfortable with this amount of salt. If you don't pay me the double I will continue my work in another kingdom.`,
        info: `In Rome... the soldier's pay was originally salt and the word salary derives from it.`,
        inCorrectPoint: 900,
        point: 100,
        isCorrect: true
      }
    ]
  },
  {
    contentUrl: 'the-cook.png',
    question: [{
      id: `2`,
      content: `Should we keep it anyway?`,
      description: `Our salt inventories are empty, my Lord. We cannot store our food anymore`,
      info: `Salt can be used to conserve food.`,
      inCorrectPoint: 292,
      point: 708,
      isCorrect: true
    }, {
      id: `2`,
      content: `Do you allow him?`,
      description: `We don't have enough sugar to cook the dessert for the banquet, I suggest we cook a salty dessert.`,
      info: `Some popular desserts like pretzel chocolate chip cookies and salted rose honey pie are made with salt.`,
      inCorrectPoint: 381,
      point: 619,
      isCorrect: true
    }, {
      id: `2`,
      content: ``,
      description: `Your highness, I am making bread for the banquet, may I ask a barrel of salt?`,
      info: `Salt for making bread? Would you give him? `,
      inCorrectPoint: 211,
      point: 789,
      isCorrect: true
    }]
  },
  {
    contentUrl: 'servant.png',
    question: [{
      id: `3`,
      content: `Do you want to let him in? `,
      description: `Your majesty, a knight from a kingdom far away is asking for shelter in our walls. It could very well be a spy…`,
      info: `In ancient kingdoms it was common to send spies to get information on the enemies.`,
      inCorrectPoint: 751,
      point: 249,
      isCorrect: true
    }, {
      id: `3`,
      content: `Do you want to let him in? `,
      description: `Your majesty, a knight from a kingdom far away is asking for shelter in our walls. It could very well be a spy…`,
      info: `In ancient kingdoms it was common to send spies to get information on the enemies.`,
      inCorrectPoint: 355,
      point: 645,
      isCorrect: true
    }, {
      id: `3`,
      content: `Would you like to quit this tax?`,
      description: `My King, there is a huge protest at Black Square to demonstrate against the new salt tax...`,
      info: `The common salt tax was of such a high value that it caused mass population shifts and exodus, attracted invaders, and caused wars.`,
      inCorrectPoint: 230,
      point: 770,
      isCorrect: true
    }]
  },
  {
    contentUrl: 'prince.png',
    question: [{
      id: `4`,
      content: `Will you give your daughter away?`,
      description: `I am here to take your beautiful daughter as my bride. My kingdom may not have as much salt as yours, but our love is as rich as it can be.`,
      info: `In the middle ages the arrangement of marriage was based on monetary worth.`,
      inCorrectPoint: 851,
      point: 149,
      isCorrect: true
    }, {
      id: `4`,
      content: `Would you send your most prestigious knights to the tournament?`,
      description: `My father, the king of Faraway, sent me to personally invite you to the annual tournament. The price will be a carriage full of premium salt.`,
      info: `The medieval tournament was a forum for European knights to show their military skills.`,
      inCorrectPoint: 129,
      point: 871,
      isCorrect: true
    }]
  },
  {
    contentUrl: 'princess.png',
    question: [{
      id: `5`,
      content: `Do you want to execute her for being so arrogant to you?`,
      description: `Father, you are as dear as salt to me!`,
      info: `There is a folktale from Italo Calvino named “Dear As Salt” where the King orders to kill his daughter because she told him she loves him “as dear as Salt`,
      inCorrectPoint: 999,
      point: 1,
      isCorrect: true
    }, {
      id: `5`,
      content: `Would you give it to her? `,
      description: `Daddy, I have only one request for you, can I have some salt as a gift for my birthday?`,
      info: `In the Middle Ages, salt was so expensive it was sometimes referred to as “white gold”`,
      inCorrectPoint: 890,
      point: 110,
      isCorrect: true
    }]
  },
  {
    contentUrl: 'alchemist.png',
    question: [{
      id: `6`,
      content: `Would you command the cook to reduce the use of salt? `,
      description: `My King, I see death caused by an overconsumption of salt in the future.`,
      info: `: A high consumption of salt can cause some health diseases such as high blood pressure and heart disease.`,
      inCorrectPoint: 80,
      point: 920,
      isCorrect: true
    }, {
      id: `6`,
      content: `Do you want to give him money to experiment?`,
      description: `My lord, I have found this interesting plant to create salt, but I need more gold to continue my research on it.`,
      info: `Salt can be obtained from Bamboo.`,
      inCorrectPoint: 195,
      point: 805,
      isCorrect: true
    }, {
      id: `6`,
      content: `Do you accept?`,
      description: `Your Majesty, I feel a lot of bad vibes against you I suggest we do a ritual against evil...`,
      info: `There are some Mayan rituals for avoiding evil vibes that involve the use of salt.`,
      inCorrectPoint: 590,
      point: 410,
      isCorrect: true
    }]
  },
  {
    contentUrl: 'queen.png',
    question: [{
      id: `7`,
      content: `Do you want to give sea salt to the harmed?`,
      description: `My love, I think this sea salt might help to cure the people struggling from this weird plague that is spreading in the kingdom.`,
      info: `Sea salt is recommended to regulate the levels of sugar in the blood.`,
      inCorrectPoint: 66,
      point: 934,
      isCorrect: true
    }, {
      id: `7`,
      content: `A dead sea salt bath? Do you want to try? `,
      description: `Oh my dear, you seem tired. Let me make a Dead sea salt bath.`,
      info: `Sea salt baths are known for their therapeutic and healing properties, as well as their ability to ease stress and boost your overall health`,
      inCorrectPoint: 252,
      point: 748,
      isCorrect: true
    }, {
      id: `7`,
      content: `Is it magic? Do you want to try?`,
      description: `Darling, you have been talking all day long. Believe me, gargling with warm salt water can make you feel better.`,
      info: `Gargling with salt water, about 1/2 teaspoon dissolved in a cup of warm water, can ease swelling and make a sore, scratchy throat feel better.`,
      inCorrectPoint: 112,
      point: 888,
      isCorrect: true
    }]
  },
  {
    contentUrl: 'prisoner.png',
    question: [{
      id: `8`,
      content: `Do you change his penalty in working at the salt-mines for two years? `,
      description: `Your highness, I regret my sins and would like to meet my newborn.`,
      info: `until the Industrial revolution salt was often mined by slaves or prisoners.`,
      inCorrectPoint: 683,
      point: 317,
      isCorrect: true
    }, {
      id: `8`,
      content: `Will you listen to what he has to say and release him from the dungeon? `,
      description: `Your Grace, I have been locked away in the dungeons for 25 years. I have seen a lot of things and could tell you what the guards are talking about your salt warehouse, if you set me free.`,
      info: `Dungeons are rooms or cells in castles where prisoners were left, especially during the renaissance period`,
      inCorrectPoint: 206,
      point: 794,
      isCorrect: true
    }, {
      id: `8`,
      content: `Would you like to throw him in the dungeon?`,
      description: `I have been accused of stealing a barrel of salt from the castle’s kitchen, though I never did it! Why would I steal worthless salt? A master thief like me can get anything he wants!`,
      info: `Worthless? No, salt was of high value to the Jews, Greeks, Tamils, Chinese, Hittites and other peoples of antiquity`,
      inCorrectPoint: 184,
      point: 816,
      isCorrect: true
    }]
  },
  {
    contentUrl: 'merchant.png',
    question: [{
      id: `9`,
      content: `Would you like to buy it?`,
      description: `My lord, I have been traveling along the Salt Route and have the finest salt from a kingdom far away. It is yours for a coach full of gold and a horse to pull it.`,
      info: `In the early years, salt was of high value. Routes to transport salt have existed, some examples are via salaria in Italy and old salt routes in Germany. `,
      inCorrectPoint: 278,
      point: 722,
      isCorrect: true
    }, {
      id: `9`,
      content: `Would you collect taxes from his salt?`,
      description: `I am a traveler and I've just bought this amazing rock salt on the way. I will stay in your land for only 1 night.`,
      info: `Cities, states and duchies along the salt roads exacted heavy duties and taxes for the salt passing through their territories.`,
      inCorrectPoint: 182,
      point: 818,
      isCorrect: true
    }, {
      id: `9`,
      content: `Would you spend money protecting your people?`,
      description: `We have made a long trek and faced a lot of dangers passing through the Salt Route.`,
      info: `For the most part, however, the historic trade route was somewhat dangerous, since the valuable cargo attracted thieves, bandits, and marauders`,
      inCorrectPoint: 198,
      point: 811,
      isCorrect: true
    }]
  },
  {
    contentUrl: 'farmer.png',
    question: [{
      id: `10`,
      content: `Do you want to punish the neighbour for his actions?`,
      description: `My neighbour has scattered salt all over my fields! Now my crops are ruined!`,
      info: `Salt is essential for cooking, but too much salt in soil can ruin crops and render fields useless`,
      inCorrectPoint: 101,
      point: 899,
      isCorrect: true
    }, {
      id: `10`,
      content: `Would you support your people even though it will cost you a fortune?`,
      description: `Your Grace, our lands become inundated. We need salt-tolerant crop varieties and new farming methods.`,
      info: `Rising soil salinity is already influencing agricultural production. Salt contamination, which leads to stunted and uneven plant growth.`,
      inCorrectPoint: 98,
      point: 902,
      isCorrect: true
    }, {
      id: `10`,
      content: `Would you like to give away such a precious thing? `,
      description: `My Lord, can I just ask for a small amount of salt to give my livestock?`,
      info: `Salt plays a key role to keep animals' bodily functions in good order, as well as their general health, production, and breeding capabilities.`,
      inCorrectPoint: 231,
      point: 769,
      isCorrect: true
    }]
  }
]

export default class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxPoint: 0,
      qLength: 0,
      gameSession: null,
      answers: null,
      yourPoint: 0,
      dialogText: "",
      questionText: "",
      infoText: "",
      isFinish: false,
      isLoading: true,
      isPaneOpen: false,
      isPaneOpenBottom: false,
      handleHeightChange: false,
      userName: "",
      submitting: false,
    };
  }
  sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    });
  }
  async componentDidMount() {
    console.log('unmout')
    await this.sleep(1000)
    const data = {
      qMaxPoint: 10000,
      qLength: 10,
      characters: [
        {
          contentUrl: 'knight.png',
          question: DataMain[0].question[Math.floor(Math.random() * 3)]
        },
        {
          contentUrl: 'the-cook.png',
          question: DataMain[1].question[Math.floor(Math.random() * 3)]
        },
        {
          contentUrl: 'servant.png',
          question: DataMain[2].question[Math.floor(Math.random() * 3)]
        },
        {
          contentUrl: 'prince.png',
          question: DataMain[3].question[Math.floor(Math.random() * 2)]
        },
        {
          contentUrl: 'princess.png',
          question: DataMain[4].question[Math.floor(Math.random() * 2)]
        },
        {
          contentUrl: 'achemist.png',
          question: DataMain[5].question[Math.floor(Math.random() * 3)]
        },
        {
          contentUrl: 'queen.png',
          question: DataMain[6].question[Math.floor(Math.random() * 3)]
        },
        {
          contentUrl: 'prisoner.png',
          question: DataMain[7].question[Math.floor(Math.random() * 3)]
        },
        {
          contentUrl: 'merchant.png',
          question: DataMain[8].question[Math.floor(Math.random() * 3)]
        },
        {
          contentUrl: 'farmer.png',
          question: DataMain[9].question[Math.floor(Math.random() * 3)]
        }
      ]
    }
    if (data != null && data.characters != null) {
      var length = data.characters.length;
      var nextQuestion = length > 0 ? data.characters[0].question : null;
      let _dialogText = "";
      let _questionText = "";
      let _infoText = "";
      if (nextQuestion != null) {
        _dialogText = nextQuestion.description;
        _questionText = nextQuestion.content;
        _infoText = nextQuestion.info;
      }
      //console.log(data);
      this.setState({
        maxPoint: data.qMaxPoint,
        qLength: data.qLength,
        gameSession: data.characters,
        answers: null,
        yourPoint: 0,
        dialogText: _dialogText,
        questionText: _questionText,
        infoText: _infoText,
        isLoading: false,
      });
    }
  }
  onShowHelpText = () => {
    this.setState({
      isPaneOpenBottom: !this.state.isPaneOpenBottom,
    });
  };
  handleGameSubmit = async () => {
    if (this.state.submitting === false) {
      this.setState({ isLoading: true, submitting: true });
      var name = this.state.userName;
      if (name !== null && name !== "") {
        var data = {
          username: name,
          score: this.state.yourPoint,
        };
        let newList = list.slice()
        newList.push(data)
        newList.sort((a, b) => (a.score > b.score) ? 1 : -1)
        setlist(newList)
        // await fetch("https://mobile12346.herokuapp.com/game/score", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(data),
        // });
      }
      this.setState({ isLoading: false, submitting: false });
      this.props.history.push("/score");
    }
  };
  render() {
    const onSwipe = (direction, question, nextQuestion) => {
      //console.log('You swiped: ' + direction);
      switch (direction) {
        case "right": {
          //yes
          onAnswer(true, question, nextQuestion);
          break;
        }
        case "left": {
          //no
          onAnswer(false, question, nextQuestion);
          break;
        }
        // case 'up': {
        //   onShowExtendInfo(nextQuestion.info);
        //   break;
        // }
        default: break;
      }
    };
    const onAnswer = (selection, question, nextQuestion) => {
      var _answers = this.state.answers != null ? this.state.answers : [];
      var existIndex = _answers.findIndex((f) => f.questionId === question.id);
      if (existIndex >= 0) {
        _answers[existIndex].selection = selection;
      } else {
        _answers.push({
          questionId: question.id,
          selection: selection,
        });
      }
      var myPoint = 0;
      var questions = this.state.gameSession;
      // console.log("questions", questions)
      _answers.map((answer, index) => {
        var i = questions.findIndex(
          (f) => f.question.id === answer.questionId
        );
        if (index >= 0) {
          var qInfo = questions[i].question;
          myPoint +=
            qInfo.isCorrect === answer.selection
              ? qInfo.point
              : qInfo.inCorrectPoint;
        }
        return null;
      });
      let _dialogText = "";
      let _questionText = "";
      let _infoText = "";
      if (nextQuestion !== null) {
        _dialogText = nextQuestion.description;
        _questionText = nextQuestion.content;
        _infoText = nextQuestion.info;
      }
      let isFinish = _answers.length === this.state.qLength;
      this.setState({
        answers: _answers,
        yourPoint: Number(myPoint.toFixed(0)),
        dialogText: _dialogText,
        questionText: _questionText,
        infoText: _infoText,
        isFinish: isFinish,
        isPaneOpenBottom: false,
      });
      //console.log(this.state.answers);
      //console.log('yourPoint', this.state.yourPoint);
    };
    var currentPercent = (this.state.yourPoint * 100) / this.state.maxPoint;
    //console.log(currentPercent)
    // const onShowExtendInfo = (info) => {
    //   //todo show extend info

    //   //
    //   //console.log(info);
    //   this.setState({
    //     infoText: info,
    //   });
    // };

    return (
      <div
        className="sas__game"
        //style={{height: window.innerWidth <= 767 ? `${window.innerHeight-56}px` : '100vh'}}
        style={{ height: window.innerHeight }}
      >
        <div className="game__navbar">
          <Progress percent={currentPercent} />
        </div>
        {this.state.isFinish !== true ? (
          <Fragment>
            {this.state.isLoading !== false ? (
              <LoadingScreen />
            ) : (
              <div className="sas__gamewrapper">
                {this.state.gameSession != null ? (
                  this.state.gameSession.map((item, index) => {
                    var _src = require(`contents/images/characters/${item.contentUrl}`);
                    var length = this.state.gameSession.length;
                    var nextQuestion =
                      index + 1 <= length - 1
                        ? this.state.gameSession[index + 1].question
                        : null;
                    return (
                      <TinderCard
                        key={index}
                        onSwipe={(direction) =>
                          onSwipe(direction, item.question, nextQuestion)
                        }
                        preventSwipe={["up", "down"]}
                        className="sas__gameitem"
                      //style={{height: window.innerWidth <= 767 ? `${window.innerHeight}px` : '100vh'}}
                      >
                        <img src={_src} alt="dsdsd" />

                        <div className="gameitem__dialog">
                          {this.state.dialogText}
                        </div>
                        <div className="gameitem__charactername">
                          {item.name}
                        </div>
                        <div
                          className={`gameitem__help ${this.state.isPaneOpenBottom
                            ? "height-translate"
                            : ""
                            }`}
                        >
                          <div
                            onClick={() => this.onShowHelpText()}
                            onTouchStart={this.onShowHelpText}
                            className="help__togglebtn"
                          >
                            <span>{this.state.questionText}</span>
                            <span className="help__joker">
                              {this.state.isPaneOpenBottom ? (
                                <img src={jokerimg} alt="dsdsd" />
                              ) : (
                                <img src={jokerimgUp} alt="dsdsd" />
                              )}
                            </span>
                          </div>
                          <div>{this.state.infoText}</div>
                        </div>
                      </TinderCard>
                    );
                  })
                ) : (
                  <div></div>
                )}
              </div>
            )}
          </Fragment>
        ) : (
          <div
            className="sas__gamesubmit"
            style={{ height: window.innerHeight }}
          >
            <div className="gamesubmit__gameform">
              <div className="gameform__header">Congratulations!</div>
              <div className="gameform__info">
                Your're a good and gracious king.
              </div>
              <div className="gameform__score">
                Your score: {Math.floor(this.state.yourPoint)}
              </div>
              <input
                type="email"
                id="gameformEmail"
                onChange={(evt) =>
                  this.setState({ userName: evt.target.value })
                }
                placeholder="Name"
              />
              {this.state.submitting === false ? (
                <div
                  className="gameform__submitbtn"
                  onClick={() => this.handleGameSubmit()}
                  onTouchStart={() => this.handleGameSubmit()}
                >
                  submit
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
