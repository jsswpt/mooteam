import React from 'react'

import styles from './styles.module.scss'

type ColProps = { id: string; children: React.ReactNode }

type RowProps = {
  id: string
  children: Array<ColProps> | React.ReactNode
}

type BlockProps = {
  id: string
  rows: Array<RowProps>
}

export type FormProps = {
  items: Array<BlockProps>
  formProps?: React.FormHTMLAttributes<HTMLFormElement>
  actions: Array<BlockProps>
}

export const Form = ({ actions, formProps, items }: FormProps) => {
  const Child = (
    <div className={styles['form-wrapper']}>
      <div className={styles['form-blocks-list']}>
        {items.map(({ id: blockId, rows }) => (
          <div className={styles['form-block']} key={blockId}>
            {rows.map(({ children, id: rowId }) => (
              <div
                className={styles['form-row']}
                key={[blockId, rowId].join('-')}
              >
                {Array.isArray(children)
                  ? children.map(({ children, id: colId }) => (
                      <div
                        className={styles['form-col']}
                        key={[blockId, rowId, colId].join('-')}
                      >
                        {children}
                      </div>
                    ))
                  : children}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles['form-blocks-list']}>
        {actions.map(({ id: blockId, rows }) => (
          <div className={styles['form-block']} key={blockId}>
            {rows.map(({ children, id: rowId }) => (
              <div
                className={styles['form-row']}
                key={[blockId, rowId].join('-')}
              >
                {Array.isArray(children)
                  ? children.map(({ children, id: colId }) => (
                      <div
                        className={styles['form-col']}
                        key={[blockId, rowId, colId].join('-')}
                      >
                        {children}
                      </div>
                    ))
                  : children}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )

  if (!formProps) {
    return Child
  }

  return <form {...formProps}>{Child}</form>
}
