import { anchorate } from "anchorate";

const subRoutes = ["/", "/team", "/work", "/contact"];

const isHomeRoute = route => subRoutes.indexOf(route) !== -1;

exports.onRouteUpdate = props => {
  // anchorate({
  //   scroller: el => el.scrollIntoView({ behavior: 'smooth' })
  // })
  // if (isHomeRoute(props.location.pathname)) {
  //   const element = document.getElementById(props.location.pathname.slice(1))
  //   console.log(props.location.pathname.slice(1), element)
  //   if(element)
  //     element.scrollIntoView({ behavior: 'smooth' })
  // }
};

// exports.shouldUpdateScroll = ({ prevRouterProps }) => {
//   if (!prevRouterProps) return false

//   const { history, location } = prevRouterProps

//   console.log({
//     shouldUpdateScroll: isHomeRoute(history.location.pathname) && isHomeRoute(location.pathname)
//   })

//   return isHomeRoute(history.location.pathname) && isHomeRoute(location.pathname)
// }

// exports.onClientEntry = () => {
//   require("intersection-observer");
// };
