import  Link  from 'next/link';

const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link href={to}><a>{children}</a></Link>
      : <>{children}</>;

export default ConditionalLink;