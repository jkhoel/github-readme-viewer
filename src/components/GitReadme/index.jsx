import React from 'react'
import { base64decode } from 'nodejs-base64'
import ReactMarkdown from 'react-markdown/with-html'
import { GithubContext } from '../GithubContext'

const GitReadme = (props) => {
    const { data } = React.useContext(GithubContext)

    
    if (data) {
        return (
            <React.Fragment>
                <ReactMarkdown source={base64decode(data.content)} escapeHtml={false} />
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div>Loading...</div>
        </React.Fragment>
    )
}

export default GitReadme