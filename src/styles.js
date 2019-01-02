export default { 
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
    color: 'black',
    borderColor: 'black'
  },
  activeTitle: {
    color: 'black'
  },
  activeLine: {
    borderColor: 'black'
  },
  disabledValue: {
    cursor: 'default'
  }
}