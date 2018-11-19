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

## Notes
For custom control one can use the `onStepChange` function and the `current` attribute:  
`<Steps steps={['first', 'second', 'third', 'fourth']} current={this.state.step} onStepChange={(step) => this.setState({ step })} />`
