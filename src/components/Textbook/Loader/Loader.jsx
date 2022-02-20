import "./Loader.scss"

export const Loader = () => {
  return (
    <>
      <div style = {{ display: 'flex', justifyContent: 'center', margin: '0.5rem'}}>
        <div className = "lds-dual-ring"></div>
      </div>
    </>
  )
}

