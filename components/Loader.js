
const Loader = () => (
  <div className='loader'>
    <img src="/loader.svg"/>
    <style jsx>{`
    .loader {
      position:fixed;
      width: 40px;
      height: 40px;
      bottom: 0;
      right: 0;
    }`}</style>
  </div>
)
export default Loader