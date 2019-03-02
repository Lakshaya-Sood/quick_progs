   let Axios = require( 'axios' ),
    AxiosInstance = Axios.create()

  AxiosInstance.interceptors.response.use( response => {
    return response
  }, function axiosRetryInterceptor( err ) {
    let config = err.config,
      statusCode,
      shouldRetry,
      errorMsg,
      // Create new promise to handle exponential backoff
      backoff = new Promise( resolve => {
        setTimeout(() => {
          resolve();
        }, config.retryDelay || 1 );
      });

    //if there is a response
    if ( err.response ) {
      errorMsg = typeof ( err.response.data ) == 'string' ? err.response.data : JSON.stringify( err.response.data )
      statusCode = parseInt( err.response.status ),
      shouldRetry = ( statusCode == 504 || statusCode == 503 )
    } else {
      // if the request was made but no response was received
      errorMsg = err.message
      statusCode = ''
      shouldRetry = true
    }

    // If config does not exist or the retry option is not set or response status code is neither 503 nor 504, reject
    if ( !config || !config.retry || !shouldRetry ) {
      return Promise.reject( err );
    }

    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0;

    // Check if we've maxed out the total number of retries
    if ( config.__retryCount >= config.retry ) {
      // Reject with the error
      return Promise.reject( err );
    }

    // Increase the retry count
    config.__retryCount += 1;

    // Return the promise in which recalls axios to retry the request
    return backoff.then(() => {
      console.log( '9000', ErrorMessages[ '9000' ], err.config.url, errorMsg )
      console.log( '9001', ErrorMessages[ '9001' ], statusCode, config.__retryCount )
      return AxiosInstance( config );
    });
  });
  
  /*
  to use:
	AxiosInstance.defaults.baseURL = route
	AxiosInstance.defaults.timeout = 240000
	AxiosInstance.defaults.retry = 3
	AxiosInstance.defaults.retryDelay = 1000
	AxiosInstance.defaults.headers = {
      default: 'application/json'
    }
	AxiosInstance.get( route, params )
		.then( resolvePromise )
		.catch( rejectPromise )
  */