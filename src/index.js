import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

/**
 * @augments {Component<{steps:[], title:string, showTitles:boolean, showCheckmarks:boolean, current:number, onStepChange:(step:number), disabled:bool, colors: [] }>}
 */
class Steps extends Component {
  state = {
    current: 0
  }

  static propTypes = {
    /** Steps to render. */
    steps: PropTypes.array,

    /** Title of the stepper. */
    title: PropTypes.string,

    /** Show step titles below the steps. */
    showTitles: PropTypes.bool,

    /** Show checkmarks on passed steps */
    showCheckmarks: PropTypes.bool,

    /** The selected step. */
    current: PropTypes.number,

    /** Function that is triggered when a step is clicked. */
    onStepChange: PropTypes.func,

    /** Don't show pointer cursor above the steps */
    disabled: PropTypes.bool,

    /** Custom colors for steps */
    colors: PropTypes.array
  }

  static defaultProps = {
    steps: [],
    showTitles: true,
    showCheckmarks: true,
    disabled: false,
    colors: []
  }

  changeStep = (step) => {
    const { onStepChange, disabled } = this.props
    if (onStepChange) {
      onStepChange(step)
    }
    if (!disabled) {
      this.setState({ current: step })
    }
  }

  render() {
    const { steps, title, showTitles, showCheckmarks, disabled, current: customCurrent, colors } = this.props
    const current = customCurrent ? customCurrent : this.state.current
    return (
      <div style={styles.stepsContainer}>
        { title && <span style={styles.stepsTitle}>{ title }</span> }
        <div style={styles.steps}>
          { steps.map((step, i) => {
            const before = (i !== 0)
            const after = (i !== steps.length - 1)
            const active = (i <= current)
            const completed = (i < current)
            return (
              <Step
                handleClick={() => this.changeStep(i)}
                key={`step-${i}`}
                value={i}
                title={step}
                before={before}
                after={after}
                active={active}
                completed={completed}
                showTitle={showTitles}
                showCheckmark={showCheckmarks}
                disabled={disabled}
                color={colors[i] || 'white'}
              />
            )
          })  }
        </div>
      </div>
    )
  }
}

class Step extends PureComponent {
  render() {
    const { value, title, before, after, handleClick, active, completed, showTitle, showCheckmark, disabled, color: backgroundColor } = this.props
    return (
      <div style={styles.step}>
        { before && <Before active={active} /> }
        <span onClick={handleClick} style={{ ...styles.stepValue, ...(active && { ...styles.activeValue, backgroundColor }), ...(disabled && styles.disabledValue) }}>
          { !(showCheckmark && completed) ? value + 1 : <CheckMark /> }
        </span>
        { showTitle && <span style={{ ...styles.stepTitle, ...(active && styles.activeTitle) }}>{ title }</span> }
        { after && <After active={active} /> }
      </div>
    )
  }
}

const Before = ({ active }) => <div style={{ ...styles.before, ...(active && styles.activeLine) }} />

const After = ({ active }) => <div style={{ ...styles.after, ...(active && styles.activeLine) }} />

const CheckMark = () => <div style={styles.checkMark} />

export default Steps