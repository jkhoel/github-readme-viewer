import React from 'react'
import Axios from 'axios';
import PropTypes from 'prop-types'

export const GithubContext = React.createContext({
    data: null,
    endpoint: null,
    setData: () => null,
    setEndpoint: () => null,
})

export const GithubContextConsumer = GithubContext.Consumer;

export const GithubContextProvider = ({ children, root, rootFile }) => {
    const [endpoint, setEndpoint] = React.useState(`${root}${rootFile}`)

    const [data, setData] = React.useState(null)
    React.useEffect(() => {
        if (endpoint) {
            Axios
                .get(endpoint)
                .then((res) => setData(res.data))
                .catch((err) => console.log(err))
        }
    }, [endpoint])

    return (
        <GithubContext.Provider value={{ data, root, endpoint, setEndpoint }} >
            {children}
        </GithubContext.Provider>
    )
}

GithubContextProvider.propTypes = {
    children: PropTypes.object,
    root: PropTypes.string.isRequired,
    rootFile: PropTypes.string.isRequired,
  };

GithubContextProvider.defaultProps = {
    children: {},
    root: null,
    rootFile: null,
};