import Head from 'next/head'
import AppleBar from '../slack-clone/apple-bar'
import SlackContainer from '../slack-clone/slack-container'

export default ({ children, title = 'Slack' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <div className="u-bg-grey u-full-height">
      <AppleBar />
      <SlackContainer/>
      {children}
    </div>
  </div>
)