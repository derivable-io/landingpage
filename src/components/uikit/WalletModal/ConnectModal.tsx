import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import getExternalLinkProps from '../util/getExternalLinkProps'
import Grid from '../Box/Grid'
import Box from '../Box/Box'
import getThemeValue from '../util/getThemeValue'
import Text from '../Text/Text'
import { Button } from '../Button'
import { ModalBody, ModalContainer, ModalHeader, ModalTitle } from '../Modal/styles'
import WalletCard, { MoreWalletCard } from './WalletCard'
import config, { walletLocalStorageKey } from './config'
import { Config, Login } from './types'
import { colors } from '../../../style/colors'

interface Props {
  login: Login;
  onDismiss?: () => void;
  displayCount?: number;
}

const WalletWrapper = styled(Box)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.34);
  max-height: calc(100vh - 290px);
`
const LearnButton = styled.a`
  width: 100%;
  height: 46px;
  background: transparent;
  border-radius: 8px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 2px solid ${colors.colorPrimary};

  &:hover {
    background: ${colors.colorPrimary};
    color: white;
  }
`
const Heading = styled.div`
  font-weight: 900;
  font-size: 19px;
  color: #fff;
`
const ModalCloseButton = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
const CloseButton = styled.img`
  width: 13px;

  &:hover {
    color: #eee;
  }
`
/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
const getPreferredConfig = (walletConfig: Config[]) => {
  const preferredWalletName = localStorage.getItem(walletLocalStorageKey)
  const sortedConfig = walletConfig.sort((a: Config, b: Config) => a.priority - b.priority)

  if (!preferredWalletName) {
    return sortedConfig
  }

  const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName)

  if (!preferredWallet) {
    return sortedConfig
  }

  return [
    preferredWallet,
    ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName),
  ]
}

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null, displayCount = 3}) => {
  const [showMore, setShowMore] = useState(false)
  const theme = useTheme()
  const sortedConfig = getPreferredConfig(config)
  const displayListConfig = showMore ? sortedConfig : sortedConfig.slice(0, displayCount)

  return (
    <ModalContainer minWidth='320px' width='320px'>
      <ModalHeader background={getThemeValue('colors.gradients.bubblegum')(theme)}>
        <ModalTitle>
          <Heading>Connect Wallet</Heading>
        </ModalTitle>
        <ModalCloseButton onClick={onDismiss}>
          <CloseButton src='/images/modal/closebutton.png' alt='' />
        </ModalCloseButton>
      </ModalHeader>
      <ModalBody>
        <WalletWrapper py='24px' overflowY='auto'>
          <Grid gridTemplateColumns='1fr 1fr'>
            {displayListConfig.map((wallet) => (
              <Box key={wallet.title}>
                <WalletCard walletConfig={wallet} login={login} onDismiss={onDismiss} />
              </Box>
            ))}
            {!showMore && <MoreWalletCard onClick={() => setShowMore(true)} />}
          </Grid>
        </WalletWrapper>
        <Box p='24px'>
          <Text textAlign='center' fontWeight='500' color='#FFFFFF' as='p' mb='16px'>
            Haven’t got a crypto wallet yet?
          </Text>
          <LearnButton href='https://docs.pancakeswap.finance/get-started/connection-guide' {...getExternalLinkProps()}>
            Learn How to Connect
          </LearnButton>
        </Box>
      </ModalBody>
    </ModalContainer>
  )
}

export default ConnectModal
