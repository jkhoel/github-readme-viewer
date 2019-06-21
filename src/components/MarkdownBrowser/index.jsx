import React from 'react'
import { GithubContext } from '../GithubContext'
import ReactMarkdown from 'react-markdown/with-html'

const MarkdownBrowser = () => {
    const { data, root, setEndpoint } = React.useContext(GithubContext)
    const renderers = {
        link: props => {
            return <button className='btn-link' onClick={() => setEndpoint(`${root}${props.href}`)}>{props.children}</button>
        },
        image: props => <img alt={props.alt} src={`${root}${props.src}`} onClick={() => console.log(props)} />
    }

    if (data) {
        return (
            <React.Fragment>
                <ReactMarkdown source={data} escapeHtml={false} renderers={renderers} />
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div>Loading...</div>
        </React.Fragment>
    )
}

export default MarkdownBrowser