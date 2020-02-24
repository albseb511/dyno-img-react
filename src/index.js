import React from 'react'
import PropTypes from 'prop-types'

class DynoImg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      source: this.props.src
    }
  }
  componentDidMount() {
    let options = {
      root: null,
      rootMargin: this.props.rootMargin || '0px'
    }
    const imageObserver = new IntersectionObserver((elem) => {
      elem.forEach((elem) => {
        if (elem.isIntersecting) {
          this.setState({
            source: this.props.srcHigh
          })
          imageObserver.unobserve(elem.target)
        }
      })
    }, options)
    imageObserver.observe(this.element)
  }
  render() {
    const {alt, style, className} = this.props
    return (
      <img
        className={ className }
        style={{...style}}
        src={this.state.source}
        alt={alt}
        ref={el => { this.element = el }}
      />
    )
  }
}

DynoImg.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  srcHigh: PropTypes.string,
  rootMargin: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

export default DynoImg
