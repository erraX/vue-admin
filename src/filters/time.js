/**
 * @file time filter
 * @author niminjie
 */

import m from 'moment';

export default function time(
    time, {
        inputFormat = 'YYYYMMDDHHmmss',
        outputFormat = 'YYYY-MM-DD HH:mm:ss',
        fallbackText = '-'
    } = {}
) {
    time = m(time, inputFormat || 'YYYYMMDDHHmmss');
    return time.isValid()
        ? time.format(outputFormat || 'YYYY-MM-DD HH:mm:ss')
        : fallbackText || '-';
}
