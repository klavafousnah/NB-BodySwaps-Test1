var _iv_config = {
  title: "Introduction to BodySwaps",
  description:
    "The first time learners use Bodyswaps, this onboarding sequence familiarises them with the features of the app, takes them through an avatar selection and embodiment activity, and prepares them for the experience to come. ",
  source : './assets/sample-vid.mp4',
  poster_image_url : './assets/poster.png',
  show_feedback_after_questions : true,
  show_feedback_on_markers : true,
  allow_question_review : true,
  x_api : true,
  x_api_endpoint: "https://cloud.scorm.com/lrs/CJ0NK8AJKV/sandbox/",
  x_api_username: "4NWI_hcWLlmqyQAhSiE",
  x_api_password: "aVkZim3lxv8kt7NE2xo",
  markers: [
    {
      index: 0,
      time: 27,
      label: "Question 1",
      main_text : "Can you pratice your skills using the VR BodySwaps?",
      type : "multiple-choice",
      choices : [
      	{ 'label':'A',
          'content':'No, it is a linear video'},
      	{ 'label':'B',
          'content':'No, but you can see interactions'},
      	{ 'label':'C',
          'content':'Yes, but only through questions or typing your answers'},
      	{ 'label':'D',
          'content':'Yes, you can practice and experience interactions in real time'},
      ],
      correct : ['D'],
      feedback : {
        correct : {
          label : "That's Correct!",
          details : "You correctly identified that you can practice and experience interactions in real time. ",
          continue_action : function(_iv_){
            console.log('after continue correct');
          }
        },
        incorrect : {
          label : "Sorry, that's not correct.",
          details : "You can practice and experience interactions in real time.",
          continue_action : function(_iv_){
            console.log('after continue incorrect');
            navigateToTime(5); 
          }
        }
      }
    },
    {
      index: 1,
      time: 43,
      label: "Question 2",
      main_text : "BodySwaps allows you to experience the impact your choices have on other people.",
      type : "multiple-choice",
      choices : [
      	{ 'label':'T',
          'content':'True'},
      	{ 'label':'F',
          'content':'False'}
      ],
      correct : ['T'],
      feedback : {
        correct : {
          label : "That's Correct!",
          details : "BodySways does allow you to experience the impact your choices have on other people."
        },
        incorrect : {
          label : "Sorry, that's not correct.",
          details : "BodySways allows you to experience the impact your choices have on other people through interactive scenarios."
        }
      }
    },
    {
      index: 3,
      time: 54,
      label: "Question 3",
      main_text : "Do you get to choose an avatar?",
      type : "multiple-choice",
      choices : [
      	{ 'label':'A',
          'content':'Yes'},
      	{ 'label':'B',
          'content':'No'},
      ],
      correct : ['A'],
      feedback : {
        correct : {
          label : "That's Correct!",
          details : "You get to pick an avatar, but it doesn't need to look like you."
        },
        incorrect : {
          label : "Sorry, that's not correct.",
          details : "You get to pick an avatar, but it doesn't need to look like you."
        }
      }
    },
//{}    {
//{      index: 4,
//{       time: 27,
//{       label: "Question 4",
//{       main_text : "Tumult Hype is compatible with jQuery <span class='instructions'>(true or false)</span>",
//{       type : "multiple-choice",
//{       choices : [
//{       	{ 'label':'T',
//{           'content':'True'},
//{       	{ 'label':'F',
//{           'content':'False'}
//{       ],
//{       correct : ['T'],
//{       feedback : {
//{         correct : {
//{           label : "That's Correct!",
//{           details : "You correctly identified the answer from that video segment."
//{         },
//{         incorrect : {
//{           label : "Sorry, that's not correct.",
//{           details : "You should review the video segment to identify the correct answer."
//{         }
//{       }
//{     },
    // {
    //   time: 16,
    //   label: "Question 2",
    //   main_text : "Which of the following are most important? (Select all that apply)",
    //   type : "multiple-select",
    //   choices : {
    //   	'A':'This is choice A',
    //   	'B':'This is choice B',
    //   	'C':'This is choice C',
    //   	'D':'This is choice D'
    //   },
    //   correct : ['A','B','D']
    // },
    // {
    //   time: 23.6,
    //   label: "Question 3",
    //   main_text : "How does this portion of the video make you feel?",
    //   type : "text-free",
    // },
    // {
    //   time: 28,
    //   label: "Question 4",
    //   main_text : "What is the best way to build a course?",
    //   type : "text-specific",
    //   correct : "This is the specified response.",
    //   percent_match : 0.95
    // },
    // {
    //   time: 36,
    //   label: "Question 5",
    //   main_text : "What is the best way to develop?",
    //   type : "text-specific",
    //   correct : "This is the more loosely specied response.",
    //   percent_match : 0.5
    // }
 ]
};
