import React from 'react';
import Router from 'next/router'
import Link from 'next/link'
import Modal from '../../components/modal'
export default class extends React.Component {
  static async getInitialProps () {
    return {
      photos: new Array(15).fill(0).map((v, k) => k + 1)
    }
  }

  constructor (props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  // handling escape close
  componentDidMount () {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown (e) {
    if (!this.props.url.query.photoId) return
    if (e.keyCode === 27) {
      this.props.url.back()
    }
  }

  dismissModal () {
    
    Router.push('/')
  }

  showPhoto (e, id) {
    e.preventDefault()
    /**
     * 示例下一个应用程序，利用路由功能。特别要注意的是，照片路线可以附加到两个不同的组件：
     * 在一种情况下渲染为模式，
     * 另一种情况下渲染为独立。
     */
    Router.push(`/sample-app?photoId=${id}`, `/sample-app/photo?id=${id}`)
  }

  render () {
    const { url } = this.props
    const photos =  new Array(15).fill(0).map((v, k) => k + 1)
    return (
      <div className='list'>
        {
          url.query.photoId &&
            <Modal
              id={url.query.photoId}
              onDismiss={() => this.dismissModal()}
            />
        }
        {
          photos.map((id) => (
            <div key={id} className='photo'>
            
              <a
                className='photoLink'
                href={`/sample-app/photo?id=${id}`}
                onClick={(e) => this.showPhoto(e, id)}
              >
                {id}
              </a>
            
            </div>
          ))
        }
        <style jsx>{`
          .list {
            padding: 50px;
            text-align: center;
          }
          .photo {
            display: inline-block;
          }
          .photoLink {
            color: #333;
            verticalAlign: middle;
            cursor: pointer;
            background: #eee;
            display: inline-block;
            width: 250px;
            height: 250px;
            line-height: 250px;
            margin: 10px;
            border: 2px solid transparent;
          }
          .photoLink:hover {
            borderColor: blue;
          }
        `}</style>
      </div>
    )
  }
}