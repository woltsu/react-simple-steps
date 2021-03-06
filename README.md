# react-simple-steps  

![steps.png](https://raw.githubusercontent.com/woltsu/react-simple-steps/master/steps.png)

### Importing
`import Steps from 'react-simple-steps'`

### How to use
`<Steps title='Demo' steps={['first', 'second', 'third', 'fourth']} />`

### Optional props
`title` = String  
`showTitles` = Boolean, default = true  
`showCheckmarks` = Boolean, default = true  
`current` = Number, index of the step to show  
`onStepChange` = Function, gets the index of the clicked step as a parameter  
`disabled` = Boolean, default = false, makes clicking of the steps have no effect and sets the cursor to default (onStepChange will still be triggered)  
`colors` = Array, custom colors for steps in order, f.ex. `['pink', 'red', '#FFFFFF',...]`  

## Notes
For custom control one can use the `onStepChange` function and the `current` attribute:  
`<Steps steps={['first', 'second', 'third', 'fourth']} current={this.state.step} onStepChange={(step) => this.setState({ step })} />`

## Changelog
[1.2.0] Added custom colors prop, cleaned code and improved documentation