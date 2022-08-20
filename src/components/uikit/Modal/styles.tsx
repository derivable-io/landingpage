import React from 'react'
import styled from 'styled-components'
import Flex from '../Box/Flex'
import { Box } from '../Box'
import { ArrowBackIcon, CloseIcon } from '../Svg'
import { IconButton } from '../Button'
import { ModalProps } from './types'

export const ModalHeader = styled.div<{ background?: string }>`
  align-items: center;
  background: #1a1a1a;
  display: flex;
  padding: 12px 24px;
  color: #fff;
  height: 65px;
`

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`

export const ModalBody = styled(Flex)`
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
  background: #29292b;
`

export const ModalCloseButton: React.FC<{ onDismiss: ModalProps['onDismiss'] }> = ({ onDismiss }) => {
  return (
    <IconButton variant='text' onClick={onDismiss} aria-label='Close the dialog'>
      <CloseIcon color='primary' />
    </IconButton>
  )
}

export const ModalBackButton: React.FC<{ onBack: ModalProps['onBack'] }> = ({ onBack }) => {
  return (
    <IconButton variant='text' onClick={onBack} area-label='go back' mr='8px'>
      <ArrowBackIcon color='primary' />
    </IconButton>
  )
}

export const ModalContainer = styled(Box)<{ minWidth: string, width?: string }>`
  overflow: hidden;
  border: 2px solid #0d0f19;
  border-radius: 32px;
  z-index: 1000;
  max-width: calc(100vw - 20px);
  width: ${({width}) => (width != null ? width : '100%')};
  min-width: 400px;
  max-height: calc(100vh - 60px);
  box-shadow: 12px 12px 22px rgb(0 0 0 / 25%);
  
  & {
    @media (max-width: ${410}px) {
      min-width: 360px;
    }
  }
`
