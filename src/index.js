import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Steps extends Component {
  state = {
    current: 0
  }

  changeStep(step) {
    const { onStepChange } = this.props
    if (onStepChange) {
      onStepChange(step)
    }
    this.setState({ current: step })
  }

  render() {
    const { steps, title, showTitles = true, showCheckmarks = true } = this.props
    const current = this.props.current ? this.props.current : this.state.current
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
                key={i}
                value={i}
                title={step}
                before={before}
                after={after}
                active={active}
                completed={completed}
                showTitle={showTitles}
                showCheckmark={showCheckmarks}
              />
            )
          })  }
        </div>
      </div>
    )
  }
}

Steps.propTypes = {
  steps: PropTypes.array.isRequired,
  title: PropTypes.string,
  showTitles: PropTypes.bool,
  showCheckmarks: PropTypes.bool,
  current: PropTypes.number,
  onStepChange: PropTypes.func
}

const Step = ({ value, title, before, after, handleClick, active, completed, showTitle, showCheckmark }) => {
  return (
    <div style={styles.step}>
      { before && <Before active={active} /> }
      <span onClick={handleClick} style={{ ...styles.stepValue, ...(active && styles.activeValue) }}>
        { !(showCheckmark && completed) ? value + 1 : <CheckMark /> }
      </span>
      { showTitle && <span style={{ ...styles.stepTitle, ...(active && styles.activeTitle) }}>{ title }</span> }
      { after && <After active={active} /> }
    </div>
  )
}

const Before = ({ active }) => <div style={{ ...styles.before, ...(active && styles.activeLine) }} />

const After = ({ active }) => <div style={{ ...styles.after, ...(active && styles.activeLine) }} />

const CheckMark = () => <div style={styles.checkMark} />

const styles = { 
  stepsContainer: {
    textAlign: 'center',
    padding: '10px',
  },
  stepsTitle: {
    fontWeight: 600
  },
  steps: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    marginTop: '10px',
    backgroundColor: 'white'    
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    textAlign: 'center',
    position: 'relative',
  },
  stepValue: {
    height: '40px',
    width: '40px',
    border: '1px solid',
    borderRadius: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
    backgroundColor: 'white',
    borderColor: '#aab2be',
    color: '#aab2be',
    fontWeight: 550,
    cursor: 'pointer',
    userSelect: 'none',
    zIndex: 2
  },
  stepTitle: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#aab2be'
  },
  before: {
    borderTop: '2px solid',
    borderColor: '#aab2be',
    position: 'absolute',
    top: '20px',
    width: '50%',
    left: 0
  },
  after: {
    borderTop: '2px solid',
    borderColor: '#aab2be',
    position: 'absolute',
    top: '20px',
    width: '50%',
    right: 0
  },
  checkMark: {
    content: '',
    display: 'block',
    width: '8px',
    height: '18px',
    border: '2px solid black',
    borderTop: 'none',
    borderLeft: 'none',
    transform: 'rotate(45deg)',
    marginBottom: '5px'
  },
  activeValue: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'black'
  },
  activeTitle: {
    color: 'black'
  },
  activeLine: {
    borderColor: 'black'
  }
}

export default Steps