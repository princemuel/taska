interface ILinks {
  routes: IRoute[];
}

interface IRoute {
  id: string;
  text: string;
  url: __next_route_internal_types__.RouteImpl<unknown>;
  icon: IconRFCType;
}

type IconRFCType = (props: IconProps) => React.JSX.Element;
