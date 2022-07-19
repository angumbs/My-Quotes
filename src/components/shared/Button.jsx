import PropTypes from 'prop-types'

function Button({ children, version, type, disabled}) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={disabled}>{children}</button>
  )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    version: PropTypes.string,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    type: 'button',
    version: 'secondary',
    disabled: false
}

export default Button
