import { Helmet } from 'react-helmet'

interface Props {
  title: string
  description: string
}

export const Meta = ({ title, description }: Props) => {
  return (
    <Helmet>
      <meta name={'viewport'} content={'width=device-width, initial-scale=1, viewport-fit=cover'} />
      <title>{title}</title>
      <meta name={'description'} content={description} />
      <meta name={'keywords'} content={description} />
    </Helmet>
  )
}
