/* eslint-disable import/prefer-default-export */
import * as React from 'react'
import TopLayout from './TopLayout'

export const wrapRootElement = ({ element }) => <TopLayout>{element}</TopLayout>
