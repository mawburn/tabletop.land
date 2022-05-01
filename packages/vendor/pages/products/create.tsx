import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { BeakerIcon, PhotographIcon } from '@heroicons/react/outline'

import { Input } from '../../components/Input'
import Layout from '../../components/Layout'
import { MoneyInput } from '../../components/MoneyInput'
import Selector from '../../components/Selector'
import config from '../../config'

const games = [
  { key: '5e', value: '5e' },
  { key: 'wh40k', value: 'WH40k' },
  { key: 'pf', value: 'PF2e/3.5e' },
  { key: 'gaslands', value: 'Gaslands' },
  { key: 'historical', value: 'Historical' },
].sort((a, b) => a.value.localeCompare(b.value))

const type = [
  { key: 'dice', value: 'Dice' },
  { key: 'decoration', value: 'Decorations' },
  { key: 'diorama', value: 'Diorama' },
  { key: 'terrain', value: 'Terrain' },
  { key: 'building', value: 'Building' },
  { key: 'scatter-terrain', value: 'Scatter Terrain' },
  { key: 'miniature', value: 'Miniature' },
  { key: 'accessories', value: 'Game Accessories' },
  { key: 'tools', value: 'Crafting Tools' },
  { key: 'partial', value: 'Partial Terrain' },
  { key: 'clothing', value: 'Clothing & Accessories' },
].sort((a, b) => a.value.localeCompare(b.value))

type.push({ key: 'other', value: 'Other' })

const environment = [
  { key: 'battlefield', value: 'Battlefield' },
  { key: 'cave', value: 'Cave / Underground' },
  { key: 'city', value: 'City' },
  { key: 'desert', value: 'Desert' },
  { key: 'field', value: 'Field' },
  { key: 'forest', value: 'Forest / Woodland' },
  { key: 'rocky', value: 'Rocky' },
  { key: 'space', value: 'Space' },
  { key: 'volcanic', value: 'Volcanic' },
  { key: 'water', value: 'Water / Underwater' },
  { key: 'indoors', value: 'Indoors' },
].sort((a, b) => a.value.localeCompare(b.value))

environment.push({ key: 'other', value: 'Other' })

const setting = [
  { key: 'fantasy', value: 'Fantasy' },
  { key: 'modern', value: 'Modern' },
  { key: 'post-apoc', value: 'Post Apocalyptic' },
  { key: 'prehistoric', value: 'Prehistoric' },
  { key: 'scifi', value: 'SciFi' },
  { key: 'steampunk', value: 'Steampunk' },
  { key: 'victorian', value: 'Victorian' },
  { key: 'wwi', value: 'WWI' },
  { key: 'wwii', value: 'WWII' },
  { key: 'western', value: 'Western' },
  { key: 'medieval', value: 'Medieval' },
].sort((a, b) => a.value.localeCompare(b.value))

setting.push({ key: 'other', value: 'Other' })

const material = [
  { key: 'dental-stone', value: 'Dental Stone' },
  { key: 'natural', value: 'Natural' },
  { key: 'chipboard', value: 'Chipboard' },
  { key: 'cardboard', value: 'Cardboard' },
  { key: 'paper', value: 'Paper / Card Stock' },
  { key: 'metal', value: 'Metal' },
  { key: 'wire', value: 'Wire' },
  { key: 'eva-foam', value: 'EVA Foam' },
  { key: 'xps-foam', value: 'XPS Foam' },
  { key: 'glass', value: 'Glass' },
  { key: 'canvas', value: 'Canvas' },
  { key: 'fabric', value: 'Fabric' },
  { key: 'polymer-clay', value: 'Polymer Clay' },
  { key: 'rubber', value: 'Rubber' },
  { key: 'plastic', value: 'Plastic' },
  { key: 'resin', value: 'Resin' },
  { key: 'pla', value: 'PLA' },
  { key: 'abs', value: 'ABS' },
].sort((a, b) => a.value.localeCompare(b.value))

material.push({ key: 'other', value: 'Other' })

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
              <span className="opacity-75">Required fields are marked with</span>{' '}
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
                  {...register('title', { required: true, maxLength: 30 })}
                />
              </div>
              <fieldset>
                <legend className="my-4">
                  Listing Type{' '}
                  <span className="text-red-500 font-normal text-base" title="required">
                    *
                  </span>
                </legend>
                <Selector
                  title="Type"
                  options={type}
                  multiple
                  {...register('type', { required: true })}
                />
              </fieldset>
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
                    render={() => <MoneyInput title="Price" smallLabel required />}
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
                <legend className="my-4">Compatible games</legend>
                <Selector
                  title="Compatible Games"
                  options={games}
                  multiple
                  {...register('game', { required: false })}
                />
              </fieldset>
              <fieldset>
                <legend className="my-4">
                  Setting{' '}
                  <span className="text-red-500 font-normal text-base" title="required">
                    *
                  </span>
                </legend>
                <Selector
                  title="setting"
                  options={setting}
                  multiple
                  {...register('setting', { required: true })}
                />
              </fieldset>
              <fieldset>
                <legend className="my-4">Environment</legend>
                <Selector
                  title="Environment"
                  options={environment}
                  multiple
                  {...register('environment', { required: false })}
                />
              </fieldset>
              <fieldset>
                <legend className="my-4">Materials Used</legend>
                <Selector
                  title="Materials"
                  options={material}
                  multiple
                  {...register('materials', { required: false })}
                />
              </fieldset>
            </form>
          </section>
        </article>
      </Layout>
    </>
  )
}

export default CreateProduct
