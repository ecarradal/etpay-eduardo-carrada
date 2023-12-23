import React from 'react'

const Footer = () => {
  return (
    <footer>
      <br />
      <h1 className='display w500'>
        Create your event with RegiM
      </h1>
      <br />
      <p className='body'>
        Leveraging our virtual and live event experience, Hubilo offers everything you need to set up your next hybrid event from registration to executing a flawless event.
      </p>
      <br />
      <button className='button btn-primary'>
        Get Early Access
      </button>
      <img src="/assets/logomark.svg" alt="Logo Mark" className='logomark-icon' />
      <div className='container justify-between details'>
        <span>
          © RegiM 2022. Made with love by Landify
        </span>
        <br />
        <span>
          For further details, drop a mail to hello@landify.design
        </span>
      </div>
    </footer>
  )
}

export default Footer
