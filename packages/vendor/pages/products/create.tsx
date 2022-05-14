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
import Required from '../../components/Required'

import styles from '../../styles/Products.module.css'
import Tip from '../../components/Tip'
import PhotoUpload from '../../components/PhotoUpload'

const games = [
  { key: '5e', value: '5e' },
  { key: 'wh40k', value: 'WH40k' },
  { key: 'pf', value: 'PF2e/3.5e' },
  { key: 'sw', value: 'Savage Worlds' },
  { key: 'gaslands', value: 'Gaslands' },
  { key: 'historical', value: 'Historical' },
].sort((a, b) => a.value.localeCompare(b.value))

const sales = [
  { key: '10', value: '10%' },
  { key: '25', value: '25%' },
  { key: '50', value: '50%' },
  { key: '75', value: '75%' },
]

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
  { key: 'boardgame', value: 'Board Game Accessory' },
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
setting.push({ key: 'na', value: 'N/A' })

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
  { key: 'wood', value: 'Wood' },
  { key: 'mdf', value: 'MDF' },
  { key: 'absresin', value: 'ABS-like Resin' },
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
              <span className="opacity-75">Required fields are marked with</span> <Required />
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
              <PhotoUpload />
              <div className="flex flex-wrap gap-2">
                <div className="flex flex-col gap-2 items-center">
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
              <fieldset className="mt-8">
                <legend className="textLabel">
                  Listing Type <Required />
                </legend>
                <Selector
                  title="Type"
                  options={type}
                  multiple
                  className={styles.smallLabel}
                  {...register('type', { required: true })}
                />
              </fieldset>
              <div className="mt-4">
                <Tip>Tip: Listings can be anything related to tabletop gaming in any way.</Tip>
              </div>
              <div className="my-8">
                <label htmlFor="descr" className="block font-bold text-xl my-1">
                  Description <Required />
                </label>
                <textarea
                  id="descr"
                  placeholder='Tip: Use "Markdown" to format your text'
                  className="p-2 h-52 w-full border border-neutral-400 rounded"
                  {...register('description', { required: true, minLength: 25 })}
                ></textarea>
              </div>
              <fieldset className="mt-8">
                <legend className="textLabel">
                  Setting <Required />
                </legend>
                <Selector
                  title="setting"
                  options={setting}
                  multiple
                  className={styles.smallLabel}
                  {...register('setting', { required: true })}
                />
              </fieldset>
              <fieldset className="mt-8">
                <legend className="textLabel">Compatible games</legend>
                <Selector
                  title="Compatible Games"
                  options={games}
                  multiple
                  className={styles.smallLabel}
                  {...register('game', { required: false })}
                />
              </fieldset>

              <fieldset className="mt-8">
                <legend className="textLabel">Environment</legend>
                <Selector
                  title="Environment"
                  options={environment}
                  multiple
                  className={styles.smallLabel}
                  {...register('environment', { required: false })}
                />
              </fieldset>
              <div className="mt-4">
                <Tip>Tip: Adding related environments can help people find your stuff!</Tip>
              </div>
              <fieldset className="mt-8">
                <legend className="textLabel">Materials Used</legend>
                <Selector
                  title="Materials"
                  options={material}
                  multiple
                  className={styles.smallLabel}
                  {...register('materials', { required: false })}
                />
              </fieldset>
              <div className="flex space-x-2 justify-end mt-8">
                <button
                  type="submit"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className={styles.submit}
                >
                  Submit Listing
                </button>
              </div>
            </form>
          </section>
        </article>
      </Layout>
    </>
  )
}

export default CreateProduct
