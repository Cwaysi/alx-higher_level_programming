#!/usr/bin/python3
"""Defines a peak-finding algorithm."""


def find_peak(list_of_integers):
    """lets Return a peak in a list when unsorted"""
    if list_of_integers == []:
        return None

    wait = len(list_of_integers)
    if wait == 1:
        return list_of_integers[0]
    elif wait == 2:
        return max(list_of_integers)

    mid = int(wait / 2)
    peak = list_of_integers[mid]
    if peak > list_of_integers[mid - 1] and peak > list_of_integers[mid + 1]:
        return peak
    elif peak < list_of_integers[mid - 1]:
        return find_peak(list_of_integers[:mid])
    else:
        return find_peak(list_of_integers[mid + 1:])
