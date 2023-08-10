type StatusProps = {
    status : 'loading' | 'data fetched' | 'error'
}

export const Status = (props : StatusProps) => {
    let message
    if(props.status === 'loading') {
        message = 'Loading'
    } else if (props.status === 'data fetched') {
        message = 'data fetched'
    } else if (props.status === 'error') {
        message = 'error'
    }
    return (
        <div>
            Status = {message}
        </div>
    )    
}