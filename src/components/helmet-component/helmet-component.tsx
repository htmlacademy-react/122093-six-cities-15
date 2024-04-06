import {Helmet} from 'react-helmet-async';

type HelmetComponentProps = {
	title: string;
	description: string;
	type: string;
}
function HelmetComponent ({title, description, type} : HelmetComponentProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://assets.htmlacademy.ru/og/htmlacademy2.png"></meta>
      <meta name="twitter:creator" content="six-cities" />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://assets.htmlacademy.ru/og/htmlacademy2.png"></meta>
    </Helmet>
  );
}

export default HelmetComponent;
