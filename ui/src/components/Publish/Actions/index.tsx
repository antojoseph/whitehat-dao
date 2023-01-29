import React, { FormEvent, ReactElement, RefObject } from 'react'
import Button from '@shared/atoms/Button'
import styles from './index.module.css'
import { FormikContextType, useFormikContext } from 'formik'
import { FormPublishData } from '../_types'
import { wizardSteps } from '../_constants'
import SuccessConfetti from '@shared/SuccessConfetti'
import { useWeb3 } from '@context/Web3'
import { useRouter } from 'next/router'
import Tooltip from '@shared/atoms/Tooltip'
import AvailableNetworks from 'src/components/Publish/AvailableNetworks'
import Info from '@images/info.svg'
import Loader from '@shared/atoms/Loader'
import lighthouse from '@lighthouse-web3/sdk';

export default function Actions({
  scrollToRef,
  did
}: {
  scrollToRef: RefObject<any>
  did: string
}): ReactElement {
  const router = useRouter()
  const { isSupportedOceanNetwork } = useWeb3()
  const {
    values,
    errors,
    isValid,
    isSubmitting
  }: FormikContextType<FormPublishData> = useFormikContext()
  const { connect, accountId } = useWeb3()

  async function handleActivation(e: FormEvent<HTMLButtonElement>) {
    // prevent accidentially submitting a form the button might be in
    e.preventDefault()

    await connect()
  }

  function handleAction(action: string) {
    const currentStep: string = router.query.step as string
    router.push({
      pathname: `${router.pathname}`,
      query: { step: parseInt(currentStep) + (action === 'next' ? +1 : -1) }
    })
    scrollToRef.current.scrollIntoView()
  }

  function handleNext(e: FormEvent) {
    e.preventDefault();
    handleAction('next')
  }


  function handlePrevious(e: FormEvent) {
    e.preventDefault()
    handleAction('prev')
  }

  const isContinueDisabled =
    (values.user.stepCurrent === 1 && errors.metadata !== undefined) ||
    (values.user.stepCurrent === 2 && errors.services !== undefined) ||
    (values.user.stepCurrent === 3 && errors.pricing !== undefined)

  const hasSubmitError =
    values.feedback?.[1].status === 'error' ||
    values.feedback?.[2].status === 'error' ||
    values.feedback?.[3].status === 'error'

  return (
    <></>
  )
}
