//the logo
this.logoSrc = "images/usaa-logo.png";

//the username
this.username = "John Doe";

//default primary color
this.primaryColor = {
  "background" : "#1e91c0",
  "color" : "#1e91c0"
};

//default secondary column
this.secondaryColor = {
  "background" : "#086a94",
  "color" : "#086a94"
};

//side menu
this.side_menu = [
  {
    name: "Tables",
    text: "Data Tables",
    icon: 'glyphicon glyphicon-list'
  },
  {
    name: "Charts",
    text: "Charts",
    icon: 'glyphicon glyphicon-signal'
  },
  {
    name: "Binding",
    text: "Data Binding",
    icon: 'glyphicon glyphicon-random'
  },
  {
    name: "Forms",
    text: "Forms",
    icon: 'glyphicon glyphicon-list-alt'
  },
  {
    text: "Drag and Drop",
    icon: 'glyphicon glyphicon-move'
  },
  {
    text: "Notifications",
    icon: 'glyphicon glyphicon-alert'
  },
  {
    text: "Data Maps",
    icon: 'glyphicon glyphicon-random'
  },
  {
    text: "WYSIWYG Editor",
    icon: 'glyphicon glyphicon-pencil'
  }
];

//top menu
this.top_menu = [
  {
    name: "Intro",
    text: "Setup",
  },
  {
    name: "Themes",
    text: "Themes"
  },
  {
    name: "Contact",
    text: "Contact"
  },
  {
    name: "Login",
    text: "Logout"
  }
];

//top menu
this.form = function(){
    this.data = [
      {
        type: "text",
        name: 'username',
        placeholder: 'Username',
        id: 'username',
        label: '',
        value: '',
        required: {
            message:"This is a required field",
            value: true
        }
      },
      {
        type: "text",
        name: 'password',
        placeholder: 'Password',
        id: 'password',
        label: '',
        value: '',
        required: {
            message:"This is a required field",
            value: true
        }
      }
    ];
};