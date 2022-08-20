import React, { useState } from 'react'
import { ethers, utils } from 'ethers'
import Bignumber from 'bignumber.js'
import { ROI_EACH_15M } from '../config/constants/config'



export const shortAddress = (account: string) => {
  return `${account.slice(0,6)}...${account.slice(-4)}`
}

export const messageAndViewOnBsc = (
  {
    title = '',
    message = '',
    hash = '',
  }: {
    title: string
    message?: string
    hash?: string
  }) => {
  return (
    <div>
      <h4>{title}</h4>
      {message && <p className='mt-1'>{message}</p>}
      {hash && (
        <p className='mt-1'>
          <a
            href={`https://bscscan.com/tx/${hash}`}
            className='bsc-link'
            target='_blank'
            rel='noreferrer'
          >
            View on BscScan
          </a>
        </p>
      )}
    </div>
  )
}

export const weiToNumber = (wei: any, decimal = 18) => {
  if (!wei || !Number(wei)) return '0'
  wei = wei.toString()
  return utils.formatUnits(wei, decimal)
}

export const formatFloat = (number: any, decimal = 2) => {
  number = number.toString()
  const arr = number.split('.')
  if (arr.length > 1) {
    arr[1] = arr[1].slice(0, decimal)
  }
  return arr.join('.')
}

export const numberToWei = (number: any, decimal = 18) => {
  number = number?.toString() || '0'

  const arr = number.split('.')
  if (arr[1] && arr[1].length > decimal) {
    arr[1] = arr[1].slice(0, decimal)
    number = arr.join('.')
  }

  return utils.parseUnits(number, decimal).toString()
}

export const calcInterestRate = (n) => {
  return (1 + ROI_EACH_15M) ** n
}

export const calcROI = (n: number) => {
  // const roi = (new Bignumber(1 + ROI_EACH_15M)).pow(n).multipliedBy(100)
  // return roi
  return ((1 + ROI_EACH_15M) ** n - 1) * 100
}

export const bn = ethers.BigNumber.from

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


export const formatSeconds = (secs: number) => {
  if(secs < 0) {
    const n = Math.ceil(-Number(secs) / (60 * 15))
    secs = n * 60 * 15 + secs
  }

  const pad = (n) => n < 10 ? `0${n}` : n;

  const h = Math.floor(secs / 3600);
  const m = Math.floor(secs / 60) - (h * 60);
  const s = Math.floor(secs - h * 3600 - m * 60);

  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}
