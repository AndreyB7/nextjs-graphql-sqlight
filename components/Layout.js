import Head from "next/head"
import Header from "./Header"
import { SwitchTransition, CSSTransition } from "react-transition-group"

const Layout = props => (
  <>
    <Head>
      <title>Sunrisedev Petproject</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Head>
    <SwitchTransition mode="out-in">
      <CSSTransition key={1} appear={true} timeout={10} classNames="fade">
        <div>
          <Header />
          <div className="layout">{props.children}</div>
          <style jsx global>{`
            html {
              box-sizing: border-box;
            }

            *,
            *:before,
            *:after {
              box-sizing: inherit;
            }

            body {
              margin: 0;
              padding: 0;
              font-size: 16px;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Helvetica, Arial, sans-serif, "Apple Color Emoji",
                "Segoe UI Emoji", "Segoe UI Symbol";
            }

            h1, h2, h3 {
              margin:0;
              margin-bottom:.5em;
            }

            .post {
              background: rgba(0, 0, 0, 0.05);
            }

            input,
            textarea {
              font-size: 16px;
            }

            button {
              cursor: pointer;
            }
            .fade-appear {
              opacity: 0;
            }
            .fade-appear-done {
              opacity: 1;
            }
            .fade-appear-done {
              transition: opacity 200ms;
            }
          `}</style>
          <style jsx>{`
            .layout {
              padding: 0 2rem;
            }
          `}</style>
        </div>
      </CSSTransition>
    </SwitchTransition>
  </>
)

export default Layout
