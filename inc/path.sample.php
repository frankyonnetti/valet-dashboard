<?php
  /**
   * If Valet and Dnsmasq verion numbers are not displaying in the sidebar,
   * you may need to use this file to provide your machine's path.
   *
   * When using PHP shell_exec() for 'valet -V 2>&1' and 'dnsmasq -v 2>&1'
   * we need to add PATH in order to avoid the error 'command not found'.
   *
   * Duplicate this file and rename it 'local_env.php'. Then update with your
   * local PATH as needed.
   */

  putenv('PATH=/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin:/bin:/sbin');
