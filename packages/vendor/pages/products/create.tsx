import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { BeakerIcon, PhotographIcon } from '@heroicons/react/outline'

import { Input } from '../../components/Input'
import Layout from '../../components/Layout'
import { MoneyInput } from '../../components/MoneyInput'
import config from '../../config'
import styles from '../../styles/Products.module.css'
import Selector from '../../components/Selector'

const games = [
  { key: '5e', value: '5e' },
  { key: 'wh40k', value: 'WH40k' },
  { key: 'pf', value: 'PF2e/3.5e' },
  { key: 'gaslands', value: 'Gaslands' },
]

const CreateProduct: NextPage = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = useCallback((data: any) => console.log(data), [])

  return (
    <>
      <Head>
        <title>{`Create a new product - ${config.title}`}</title>
      </Head>
      <Layout>
        <article className="card h-full rounded-md m-3">
          <section className="p-2">
            <div className="flex items-center">
              <BeakerIcon className="mr-2 h-8 w-8 text-primary" />
              <h1>Create a new listing</h1>
            </div>
            <div className="p-2 mt-4">
              <span className="opacity-75"> Required fields are marked with</span>{' '}
              <span className="text-red-500 font-normal text-base" title="required">
                *
              </span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-3">
              <div className="my-4">
                <Input
                  title="Title"
                  required
                  placeholder="Tip: Use words people are likely to search for"
                  {...register('title', { required: true, maxLength: 25 })}
                />
              </div>

              <div className="my-8">
                <label htmlFor="descr" className="block font-bold text-xl my-1">
                  Description{' '}
                  <span className="text-red-500 font-normal text-base" title="required">
                    *
                  </span>
                </label>
                <textarea
                  id="descr"
                  placeholder='Tip: Use "Markdown" to format your text'
                  className="p-2 h-52 w-full border border-neutral-400 rounded"
                  {...register('description', { required: true, minLength: 25 })}
                ></textarea>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="flex gap-2 items-center">
                  <Controller
                    name="price"
                    control={control}
                    rules={{
                      required: true,
                      min: 0.5,
                      maxLength: 10,
                    }}
                    render={() => (
                      <MoneyInput title="Price" smallLabel noEmpty required defaultValue="0.50" />
                    )}
                  />
                  <Controller
                    name="salePrice"
                    control={control}
                    rules={{
                      min: 0.5,
                      maxLength: 10,
                    }}
                    render={() => <MoneyInput title="Sale Price" smallLabel />}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center my-8 h-52 border border-neutral-400 rounded">
                <div className="flex flex-col items-center justify-center">
                  <PhotographIcon className="h-10 w-10 opacity-70" />
                  <div className="text-xl font-bold">
                    Add photos{' '}
                    <span className="text-red-500 font-normal text-base" title="required">
                      *
                    </span>
                  </div>
                  <p className="italic opacity-70">
                    Upload eye catching photos that show the product from many angles
                  </p>
                </div>
              </div>
              <fieldset>
                <legend>Select compatible games</legend>
                <Selector title="Compatible Games" options={games} multiple />
              </fieldset>
            </form>
          </section>
        </article>
      </Layout>
    </>
  )
}

export default CreateProduct
