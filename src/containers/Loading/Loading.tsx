import { Flex, Loader } from 'components'

export const Loading = () => {
  return (
    <Flex
      fill="horizontal"
      direction="column"
      justify="center"
      align="center"
      padding={{
        all: 14
      }}
    >
      <Loader />
    </Flex>
  )
}
