this.title = "Demo";
this.desc = "Some description right here";

this.form = [
      {
        type:'static',
        id: 'static-item',
        name: 'static',
        label: 'Static Message',
        class: 'error',
        value: "This is a custom error message"
      },
      {
        type: "text",
        name: 'Elon',
        id: 'field1',
        label: 'Text Field',
        value: '',
        required: {
            message:"This is a required field",
            value: true
        }
      },
      {
        type: 'checkbox',
        id: 'field2',
        name: 'Terry',
        label: 'Checkbox',
        opt: [{
          value: "Answer 1",
          selected: true
        },{
          value: "Answer 2",
          selected: false
        },{
          value: "Answer 3",
          selected: false
        }],
        required: {
            message:"This is a required field",
            value: true
        }
      },
      {
        type: 'textbox',
        id: 'field3',
        name: 'Terry',
        label: 'Text Area',
        value: '',
        required: {
            message:"This is a required field",
            value: true
        },
        minlength: {
            message:"This needs to be more than 2 characters",
            value: 2
        }
      },
      {
        type: 'file',
        id: 'field4',
        name: 'Terry',
        label: 'File Upload',
        value: ''
      },
      {
        type: 'dropdown',
        id: 'field5',
        name: 'Terry',
        label: 'Dropdown',
        value: '',
        options: [{
          value: "Value 1",
          text: "Value 1"
        },{
          value: "Value 2",
          text: "Value 2"
        },{
          value: "Value 3",
          text: "Value 3"
        }],
        required: {
            message:"This is a required field",
            value: true
        }
      },
      {
        type: 'radio',
        id: 'field6',
        name: 'Terry',
        label: 'Radio Buttons',
        opt: [{
          value: "Answer 1",
          selected: true
        },{
          value: "Answer 2",
          selected: false
        },{
          value: "Answer 3",
          selected: false
        }],
        required: {
            message:"This is a required field",
            value: true
        },
      }
    ];