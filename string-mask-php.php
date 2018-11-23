<?php

function asteriskMask($str, $length = 5, $start = false) {
	if (strlen($str) < $length)
		$length = strlen($str) / 2;

	if (!$start) 
		return substr($str, 0, strlen($str) - $length) . str_repeat('*', $length);
	
	return str_repeat('*', $length) . substr($str, $length, strlen($str) - 1);
}
