import { Link } from 'next/link';

const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link href={to}>{children}</Link>
      : <>{children}</>;

export default ConditionalLink;