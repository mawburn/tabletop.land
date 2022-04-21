import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import { BeakerIcon, PhotographIcon } from '@heroicons/react/outline'

import Layout from '../../components/Layout'
import config from '../../config'
import styles from '../../styles/Products.module.css'

const CreateProduct: NextPage = () => {
  const {
    register,
    handleSubmit,
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
        <article className="card h-full rounded-md">
          <section className="p-2">
            <div className="flex items-center">
              <BeakerIcon className="mr-2 h-8 w-8 text-primary" />
              <h1>Create a new listing</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-3">
              <div className="my-4">
                <Input
                  title="Title"
                  placeholder="Tip: Use words people are likely to search for"
                  {...register('title', { required: true, maxLength: 25 })}
                />
              </div>
              <div className="flex items-center justify-center my-8 h-52 border border-neutral-400 rounded">
                <div className="flex flex-col items-center justify-center">
                  <PhotographIcon className="h-10 w-10 opacity-70" />
                  <div className="text-xl font-bold">Add photos</div>
                  <p className="italic opacity-70">
                    Upload eye catching photos that show the product from many angles
                  </p>
                </div>
              </div>
              <div className="my-8">
                <label htmlFor="descr" className="block font-bold text-xl my-1">
                  Description
                </label>
                <textarea
                  id="descr"
                  className="p-2 h-52 w-full border border-neutral-400 rounded"
                ></textarea>
              </div>
            </form>
          </section>
        </article>
      </Layout>
    </>
  )
}

export default CreateProduct
