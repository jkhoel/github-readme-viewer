import React from 'react'
import Axios from 'axios';
// import PropTypes from 'prop-types'

export const GithubContext = React.createContext({
    apiPath: null,
    data: null,
    setData: () => null,
})

export const GithubContextConsumer = GithubContext.Consumer;

export const GithubContextProvider = ({ children, endpoint }) => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        if (endpoint) {
            Axios
                .get(endpoint)
                .then((res) => setData(res.data))
        }
    }, [endpoint])

    return (
        <GithubContext.Provider value={{ data }} >
            {children}
        </GithubContext.Provider>
    )
}

// GithubContextProvider.propTypes = {
//     children: PropTypes.object,
//   };
  
  GithubContextProvider.defaultProps = {
    children: {},
  };