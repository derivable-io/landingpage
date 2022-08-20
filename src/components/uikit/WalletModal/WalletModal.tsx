import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import styled, { useTheme } from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import { BigNumber } from 'ethers'
import { ModalBody, ModalContainer, ModalHeader, ModalTitle } from '../Modal/styles'
import Box from '../Box/Box'
import getThemeValue from '../util/getThemeValue'
import { Config, Logout } from './types'
import Text from '../Text/Text'
import { useBalance } from '../../../state/wallet/hooks'
import { formatWeiToDisplayNumber } from '../../../utils/formatBalance'
import { tokens } from '../../../config/constants/tokens'
import { colors } from '../../../style/colors'

interface Props {
  logout: Logout;
  onDismiss?: () => void;
  displayCount?: number;
}

const DisconnectButton = styled.button`
  width: 100%;
  height: 46px;
  background: transparent;
  border-radius: 8px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
  border: 2px solid ${colors.colorPrimary};

  &:hover {
    background: ${colors.colorPrimary};
    color: white;
    transform: translateY(-2px);
  }

  &:active {
    background: rgba(19,24,35,.34);
    color: white;
    transform: translateY(0);
  }
`

const AddressBox = styled.div`
  padding: 12px 12px;
  display: flex;
  align-items: center;
  width: 100%;
  background:  rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  cursor: pointer;
`

const Address = styled.span`
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${colors.colorPrimary};
  font-weight: 700;
`

const BalanceBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0 25px 0;
`


const Balance = styled.div`
`


const BalanceUSD = styled.p`
  text-align: right;
  color: ${colors.colorPrimary};
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

const ButtonViewOnBsc = styled.a`
  display: block;
  text-align: right;
  color: #FFFFFF;
  margin-bottom: 22px;
`

const bn = BigNumber.from

const WalletModal: React.FC<Props> = ({ logout, onDismiss = () => null, displayCount = 3}) => {
  const theme = useTheme()
  const { account } = useWeb3React()
  const { balance } = useBalance()

  return (
    <ModalContainer minWidth='320px' width='320px'>
      <ModalHeader background={getThemeValue('colors.gradients.bubblegum')(theme)}>
        <ModalTitle>
          <Heading>Your Wallet</Heading>
        </ModalTitle>
        <ModalCloseButton onClick={onDismiss}>
          <CloseButton src='/images/modal/closebutton.png' alt='' />
        </ModalCloseButton>
      </ModalHeader>
      <ModalBody>
        <Box p='24px'>
          <Text textAlign='left' color='#FFFFFF' as='p' mb='16px'>
            YOUR ADDRESS
          </Text>

          <CopyToClipboard text={account} onCopy={() => {
            toast.info('Copied Address')
          }}>
            <AddressBox>
              <Address>
                {account}
              </Address>
              <img src='/icons/copy_icon.svg' alt='' />
            </AddressBox>
          </CopyToClipboard>

          <ButtonViewOnBsc href={`https://bscscan.com/address/${account}` } target='_blank'>
            <Text pr={2} as='span' color='#FFFFFF'>
              View on BscScan
            </Text>
            <img src='/icons/link_icon.svg' alt='' />
          </ButtonViewOnBsc>

          <DisconnectButton onClick={() => {
            logout()
            onDismiss()
          }}>
            Disconnect Wallet
          </DisconnectButton>
        </Box>
      </ModalBody>
    </ModalContainer>
  )
}

export default WalletModal
