# `dds-expressive-modal`

## `Misc attributes`

####   `should render with minimum attributes`

```
<a
  class="bx--visually-hidden"
  href="javascript:void 0"
  id="start-sentinel"
  role="navigation"
>
</a>
<div
  class="bx--modal-container"
  role="dialog"
  tabindex="-1"
>
  <div class="bx--modal-content">
    <div class="dds-ce--modal__hedaer--with-body">
      <slot name="header">
      </slot>
    </div>
    <div class="dds-ce--modal__body dds-ce--modal__body--with-footer">
      <slot>
      </slot>
    </div>
    <div>
      <slot name="footer">
      </slot>
    </div>
  </div>
</div>
<a
  class="bx--visually-hidden"
  href="javascript:void 0"
  id="end-sentinel"
  role="navigation"
>
</a>

```

####   `should render with various attributes`

```
<a
  class="bx--visually-hidden"
  href="javascript:void 0"
  id="start-sentinel"
  role="navigation"
>
</a>
<div
  class="bx--modal-container"
  role="dialog"
  tabindex="-1"
>
  <div class="bx--modal-content">
    <div class="dds-ce--modal__hedaer--with-body">
      <slot name="header">
      </slot>
    </div>
    <div class="dds-ce--modal__body dds-ce--modal__body--with-footer">
      <slot>
      </slot>
    </div>
    <div>
      <slot name="footer">
      </slot>
    </div>
  </div>
</div>
<a
  class="bx--visually-hidden"
  href="javascript:void 0"
  id="end-sentinel"
  role="navigation"
>
</a>

```

## `Misc contents`

####   `should render with header only`

```
<a
  class="bx--visually-hidden"
  href="javascript:void 0"
  id="start-sentinel"
  role="navigation"
>
</a>
<div
  class="bx--modal-container"
  role="dialog"
  tabindex="-1"
>
  <div class="bx--modal-content">
    <div>
      <slot name="header">
      </slot>
    </div>
    <div class="dds-ce--modal__body">
      <slot>
      </slot>
    </div>
    <div>
      <slot name="footer">
      </slot>
    </div>
  </div>
</div>
<a
  class="bx--visually-hidden"
  href="javascript:void 0"
  id="end-sentinel"
  role="navigation"
>
</a>

```

####   `should render with header and body only`

```
<a
  class="bx--visually-hidden"
  href="javascript:void 0"
  id="start-sentinel"
  role="navigation"
>
</a>
<div
  class="bx--modal-container"
  role="dialog"
  tabindex="-1"
>
  <div class="bx--modal-content">
    <div class="dds-ce--modal__hedaer--with-body">
      <slot name="header">
      </slot>
    </div>
    <div class="dds-ce--modal__body">
      <slot>
      </slot>
    </div>
    <div>
      <slot name="footer">
      </slot>
    </div>
  </div>
</div>
<a
  class="bx--visually-hidden"
  href="javascript:void 0"
  id="end-sentinel"
  role="navigation"
>
</a>

```

####   `should render with header and footer only`

```
<a
  class="bx--visually-hidden"
  href="javascript:void 0"
  id="start-sentinel"
  role="navigation"
>
</a>
<div
  class="bx--modal-container"
  role="dialog"
  tabindex="-1"
>
  <div class="bx--modal-content">
    <div class="dds-ce--modal__hedaer--with-body">
      <slot name="header">
      </slot>
    </div>
    <div class="dds-ce--modal__body">
      <slot>
      </slot>
    </div>
    <div>
      <slot name="footer">
      </slot>
    </div>
  </div>
</div>
<a
  class="bx--visually-hidden"
  href="javascript:void 0"
  id="end-sentinel"
  role="navigation"
>
</a>

```

